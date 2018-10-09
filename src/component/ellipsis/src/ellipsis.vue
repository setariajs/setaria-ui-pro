<style lang="scss" scoped>
.el-ellipsis {
  overflow: hidden;
  display: inline-block;
  word-break: break-all;
  width: 100%;
  line-height: 1.5;

  &.is-lines {
    position: relative;

    .shadow {
      display: block;
      position: absolute;
      color: transparent;
      opacity: 0;
      z-index: -999;
      width: 100%;

      span {
        display: inline-block;
        width: 100%;
      }
    }

    & > span {
      display: inline-block;
      width: 100%;
    }
  }

  &.is-line-clamp {
    position: relative;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
  }
}
</style>
<script>
import { addResizeListener, removeResizeListener } from '../../resize-event';

const isSupportLineClamp = document.body.style.webkitLineClamp !== undefined;

export default {
  name: 'ElEllipsis',
  props: {
    tooltip: {
      type: Boolean,
      default: false,
    },
    length: null,
    lines: null,
    fullWidthRecognition: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
    },
  },
  data() {
    return {
      displayText: '',
      targetCount: null,
    };
  },
  mounted() {
    if (this.$refs.shadow) {
      addResizeListener(this.$el, this.computeLine);
    }
  },
  beforeDestroy() {
    if (this.$refs.shadow && this.$el) {
      removeResizeListener(this.$el, this.computeLine);
    }
  },
  methods: {
    isSingleByteChar(char) {
      const charCode = char.charCodeAt(0);
      return charCode >= 0 && charCode <= 128;
    },
    getStrFullLength(str = '') {
      return str.split('').reduce((pre, cur) => {
        if (this.isSingleByteChar(cur)) {
          return pre + 1;
        }
        return pre + 2;
      }, 0);
    },
    cutStrByFullLength(str = '', maxLength) {
      let showLength = 0;
      return str.split('').reduce((pre, cur) => {
        if (this.isSingleByteChar(cur)) {
          showLength += 1;
        } else {
          showLength += 2;
        }
        if (showLength <= maxLength) {
          return pre + cur;
        }
        return pre;
      }, '');
    },
    getDisplayText(str) {
      // 按照文本长度截取
      if (typeof this.length === 'number') {
        const textLength = this.fullWidthRecognition
          ? this.getStrFullLength(str) : str.length;
        if (textLength <= this.length || this.length < 0) {
          return str;
        }
        const tail = '...';
        if (this.length - tail.length <= 0) {
          return '';
        }
        const ret = this.fullWidthRecognition
          ? this.cutStrByFullLength(str, this.length) : str.slice(0, this.length);
        return `${ret}${tail}`;
      }
      return str;
    },
    computeLine() {
      if (typeof this.lines === 'number' && !isSupportLineClamp) {
        const shadowChildrenNode = this.$refs.shadowChildren;
        const text = shadowChildrenNode.innerText || shadowChildrenNode.textContent;
        const lineHeight = parseInt(getComputedStyle(this.$el).lineHeight, 10);
        const targetHeight = this.lines * lineHeight;
        this.$el.style.height = `${targetHeight}px`;
        const totalHeight = shadowChildrenNode.offsetHeight;
        const shadowNode = this.$refs.shadow.firstChild;

        if (totalHeight <= targetHeight) {
          this.displayText = text;
          this.targetCount = text.length;
          return;
        }

        // bisection
        const len = text.length;
        const mid = Math.ceil(len / 2);
        const count = this.bisection(targetHeight, mid, 0, len, text, shadowNode);
        this.targetCount = count;
        this.displayText = text;
      }
    },
    bisection(th, m, b, e, text, shadowNode) {
      const node = shadowNode;
      const suffix = '...';
      let mid = m;
      let end = e;
      let begin = b;
      node.innerHTML = text.substring(0, mid) + suffix;
      let sh = node.offsetHeight;
      if (sh <= th) {
        node.innerHTML = text.substring(0, mid + 1) + suffix;
        sh = node.offsetHeight;
        if (sh > th || mid === begin) {
          return mid;
        }
        begin = mid;
        if (end - begin === 1) {
          mid = 1 + begin;
        } else {
          mid = Math.floor((end - begin) / 2) + begin;
        }
        return this.bisection(th, mid, begin, end, text, node);
      }
      if (mid - 1 < 0) {
        return mid;
      }
      node.innerHTML = text.substring(0, mid - 1) + suffix;
      sh = node.offsetHeight;
      if (sh <= th) {
        return mid - 1;
      }
      end = mid;
      mid = Math.floor((end - begin) / 2) + begin;
      return this.bisection(th, mid, begin, end, text, node);
    },
  },
  render(h) {
    const {
      displayText,
      lines,
      length,
      text,
      tooltip,
      $slots,
      targetCount,
    } = this;

    const classList = {
      'el-ellipsis': true,
      'is-lines': typeof lines === 'number',
      'is-line-clamp': isSupportLineClamp,
    };

    // 没有指定lines和length属性的场合
    if (typeof length !== 'number' && typeof lines !== 'number') {
      return (
        <span class={ classList }>
          { text || $slots.default }
        </span>
      );
    }

    // 指定了length属性的场合
    if (typeof length === 'number') {
      const content = $slots.default ? $slots.default[0].text.trim() : text;
      const children = this.getDisplayText(content);
      return (
        <div class={ classList }>
          { tooltip ? (
            <el-tooltip content={ content }>
              <span>{ children }</span>
            </el-tooltip>
          ) : children }
        </div>
      );
    }

    // 浏览器支持document.body.style.webkitLineClamp的场合
    if (isSupportLineClamp) {
      const content = $slots.default ? $slots.default : text;
      const style = {
        '-webkit-line-clamp': lines,
        '-webkit-box-orient': 'vertical',
      };
      const children = text || $slots.default;
      const node = (
        <div class={ classList } style={ style }>
          { children }
        </div>
      );
      return tooltip ? (
        <el-tooltip content={ content }>
          <span>{ children }</span>
        </el-tooltip>
      ) : (
        node
      );
    }

    const childNode = (
      <span>
        {targetCount > 0 && displayText.substring(0, targetCount)}
        {targetCount > 0 && targetCount < displayText.length && '...'}
      </span>
    );
    const shadowChildrenNode = (
      <div class="shadow" ref="shadowChildren">
        {
          $slots.default ? (
            $slots.default
          ) : (
            text
          )
        }
      </div>
    );
    const shadowNode = (
      <div class="shadow" ref="shadow">
        <span>
          {
            $slots.default ? (
              $slots.default
            ) : (
              text
            )
          }
        </span>
      </div>
    );
    return h('div', {
      class: classList,
    }, [
      childNode,
      shadowChildrenNode,
      shadowNode,
    ]);
  },
};
</script>
