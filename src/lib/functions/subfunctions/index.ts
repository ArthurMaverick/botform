import {ClickElementsProps,TypeElementsProps} from '../../contracts'
import {Page} from 'puppeteer'

export async function addClick(page: Page, clickElement?: ClickElementsProps[]) {
  if(clickElement !== undefined && clickElement !== null)  {
    for (const ele of clickElement) {
      await page.click(`${ele.element}[${ele.atribute}]`)
    }
  }
}
export async function addType(page: Page, typeElement?: TypeElementsProps[]) {
  if(typeElement !== undefined && typeElement !== null) {
    for (const ele of typeElement) {
      await page.type(`${ele.element}[${ele.atribute}]`, ele.textValue)
    }
  }
}

