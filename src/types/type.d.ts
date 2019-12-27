interface IState {
  [key: string ]: any
}

export type TMutation = (state: IState, payload: any) => void

interface IMutation {
  [key: string]: TMutation[]
}

export type TAction = (args1: {
  dispatch(type: string, payload: any): Promise<any>
  commit(type: string, payload: any): void
  state: IState
}, payload: any) => Promise<any>

interface IAction {
  [key: string]: TAction[]
}

interface IStoreMeta {
  state: IState
  mutations: any
  actions: any
}

declare class MStore {
  constructor(property: IStoreMeta)
  commit: (type: string, payload: any) => void
  dispatch: (type: string, payload: any) => Promise<any>
  mutationSubscribe: (fn: any) => (() => void)
  subscribeAction: (fn: any) => (() => void)
}