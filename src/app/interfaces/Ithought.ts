import { ThoughtModel } from '../enums/thoughtModel';

export interface Thought {
    id?: number,
    content: string,
    author: string,
    model: ThoughtModel,
    favorite: boolean
  }
  