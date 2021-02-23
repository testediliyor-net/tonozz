import { AppComponent } from "src/app/app.component";

let GlobBodyClass = '';

/**
 * You can add classes to the body element
 * @param bodyClassName
 */
export function setBodyClass(bodyClassName: string) {

  AppComponent.isBrowser.subscribe(browser => {
    if (browser) {
      const body = document && document.querySelector('body');

      /** Remove current bodyClass on the Body Element and add new  */
      GlobBodyClass && body.classList.remove(GlobBodyClass);
      body.classList.add(bodyClassName);

      /** Set to Global */
      GlobBodyClass = bodyClassName;
    }
  });
}