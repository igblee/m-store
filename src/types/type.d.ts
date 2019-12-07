interface IState {
  [key: string | number]: any
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

interface IStore {
  state: IState
  mutations: any
  actions: any
}
