import { ILink } from './ILink.ts';

export interface ILinkWithSublinks extends ILink {
  subLinks: ILink[];
}