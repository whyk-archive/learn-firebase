import ss from 'smoothscroll-polyfill'

ss.polyfill()

/**
 * 対象となる要素までスムーススクロールさせる
 * @param target 対象となる要素
 */
export const smoothScroll = (): void => {
  interface HTMLElementEvent<T extends HTMLElement> extends Event {
    target: T
  }

  document.addEventListener(
    'click',
    (e: HTMLElementEvent<HTMLAnchorElement>) => {
      const target = e.target
      if (!target.classList.contains('js-smooth-scroll')) return
      e.preventDefault()
      const targetId = target.hash
      const $target = document.querySelector(targetId)
      const rectTop = $target.getBoundingClientRect().top
      const offsetTop = window.pageYOffset
      const BUFFER = 0
      const top = rectTop + offsetTop - BUFFER
      window.scrollTo({
        top,
        behavior: 'smooth',
      })
    }
  )
}
