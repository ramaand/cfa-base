import { Observable } from "rxjs";

import { HeaderPresenter } from "@/cores/entities/presenters/header.presenter";
import { UserService } from "@/cores/services/user/user.service";

interface HeaderUsecaseI {
  userService: UserService;
  getInfo(isUser: number): Observable<HeaderPresenter>;
}

export abstract class HeaderUsecase implements HeaderUsecaseI {
  readonly userService: UserService;
  constructor(userService: UserService) {
    this.userService = userService;
  }
  abstract getInfo(idUser: number): Observable<HeaderPresenter>;
}
