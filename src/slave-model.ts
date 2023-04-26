import { createStore, createEvent, sample } from "effector";
import { type ServerPageContext } from "nextjs-effector";

export const boot = createEvent<ServerPageContext>()
export const test = createEvent()

export const setSlugs = createEvent<string[]>()

export const $slugs = createStore<string[]>([])

sample({
  clock: setSlugs,
  target: $slugs
})

sample({
  clock: boot,
  fn: ({ params }) => {
    const { slave = [] } = params

    return slave
  },
  target: setSlugs
})

sample({
  clock: test,
  fn: () => {
    console.log('called on the client side')
    return true
  }
})