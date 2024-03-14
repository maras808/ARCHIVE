import { Browser, Builder, By } from "selenium-webdriver"

const test_old2 = async () => {

  // const runSafely = async (code: () => void) => {
  //   try {
  //     code()
  //   } catch (error) {
  //     console.error(`%c ${error}, color: red`)
  //   }
  // }

  let driver = await new Builder().forBrowser(Browser.CHROME).build()
  await driver.get("http://localhost:4200/pl/login")
  console.log(await driver.getPageSource())

  await new Promise((r) => setTimeout(r, 5000))

  await driver.findElement(By.css("#mat-input-1")) ? console.log("TRUE") : console.log("FALSE")
  driver.quit()
}

test_old2()