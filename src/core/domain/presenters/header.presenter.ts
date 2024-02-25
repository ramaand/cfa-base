import { UserDomain } from "@/entities/user.domain";

type THeaderPresenter = {
  title: string;
  description: string;
  user: UserDomain;
};

export class HeaderPresenter implements THeaderPresenter {
  title: string;
  description: string;
  user: UserDomain;
  constructor(header: THeaderPresenter) {
    this.title = header.title;
    this.description = header.description;
    this.user = header.user;
  }
}
