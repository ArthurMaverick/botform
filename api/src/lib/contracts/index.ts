
export type CreateBotProps ={
  url: string,
  timers: TimersProps
  elementGroup: ElementsGroup[]
}

export type TimersProps = { 
  timestoped: number
  loops: number
}

export type ElementsGroup = {
    options: string
    clickOptions: ClickElementsProps
    typeOptions: TypeElementsProps
}

export type ClickElementsProps ={
  clickElement: string
  ClickAtribute: string
}

export type TypeElementsProps ={
  typeElement: string
  typeAtribute: string
  textValue: string
}




