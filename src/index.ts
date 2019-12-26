import { IState, IMutation, IAction, IStore, TMutation, TAction } from '@/types/type'
import MStore from '@glennlee/m-store'
console.log('TCL: MStore', MStore)

class Store {
  public state: IState = null
  private mutations: IMutation = null
  private actions: IAction = null
  private mutationSubscribers: any[] = null
  private actionSubscribers: any[] = null
  constructor ({ state, mutations, actions }: IStore) {
    this.state = state
    Object.keys(mutations).forEach((key) => {
      if (Object.prototype.toString.call(mutations[key]) === '[object Array]') {
        this.mutations[key] = mutations[key]
      } else {
        this.mutations[key] = [mutations[key]]
      }
    })
    Object.keys(actions).forEach((key) => {
      if (Object.prototype.toString.call(actions[key]) === '[object Array]') {
        this.actions[key] = actions[key]
      } else {
        this.actions[key] = [actions[key]]
      }
    })
    this.mutationSubscribers = []
    this.actionSubscribers = []
  }

  public commit (type: string, payload: any): void {
    if (!this.mutations[type]) {
      console.error('[m store]', `unknown mutation type: ${type}`)
      return
    }
    const entry = this.mutations[type]
    const mutation = { type, payload }
    try {
      this.mutationSubscribers
        .filter(sub => sub.before)
        .forEach(sub => sub.before(mutation, this.state))
    } catch (e) {
      if (process.env.NODE_ENV !== 'production') {
        console.warn('[m store] error in mutation\'s before subscribers: ')
        console.error(e)
      }
    }
    entry.forEach((handler: TMutation): void => {
      handler(this.state, payload)
    })
    try {
      this.mutationSubscribers
        .filter(sub => sub.after)
        .forEach(sub => sub.after(mutation, this.state))
    } catch (e) {
      if (process.env.NODE_ENV !== 'production') {
        console.warn('[m store] error in mutation\'s after subscribers: ')
        console.error(e)
      }
    }
  }

  public async dispatch (type: string, payload: any): Promise<any> {
    if (!this.actions[type]) {
      console.error('[m store]', `unknown action type: ${type}`)
      return
    }
    const entry = this.actions[type]
    const action = { type, payload }
    try {
      this.actionSubscribers
        .filter(sub => sub.before)
        .forEach(sub => sub.before(action, this.state))
    } catch (e) {
      if (process.env.NODE_ENV !== 'production') {
        console.warn('[m store] error in action\'s before subscribers: ')
        console.error(e)
      }
    }
    const promiseList = entry.length > 1
      ? Promise.all(entry.map((handler: TAction): Promise<any> => handler({
        dispatch: this.dispatch,
        commit: this.commit,
        state: this.state
      }, payload)))
      : entry[0]({
        dispatch: this.dispatch,
        commit: this.commit,
        state: this.state
      }, payload)
    const res = await promiseList
    try {
      this.actionSubscribers
        .filter(sub => sub.after)
        .forEach(sub => sub.after(action, this.state))
    } catch (e) {
      if (process.env.NODE_ENV !== 'production') {
        console.warn('[m store] error in action\'s after subscribers: ')
        console.error(e)
      }
    }
    return res
  }

  public mutationSubscribe (fn: any): () => void {
    const subs = typeof fn === 'function' ? { before: fn } : fn
    return genericSubscribe(subs, this.mutationSubscribers)
  }

  public subscribeAction (fn: any): () => void {
    const subs = typeof fn === 'function' ? { before: fn } : fn
    return genericSubscribe(subs, this.actionSubscribers)
  }
}

function genericSubscribe (fn: any, subs: any[]): () => void {
  if (subs.indexOf(fn) < 0) {
    subs.push(fn)
  }
  return (): void => {
    const i = subs.indexOf(fn)
    if (i > -1) {
      subs.splice(i, 1)
    }
  }
}
export default Store
module.exports = Store
