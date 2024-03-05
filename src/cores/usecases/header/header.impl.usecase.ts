import { map, Observable } from "rxjs";

import { HeaderPresenter } from "@/cores/entities/presenters/header.presenter";
import { UserService } from "@/cores/services/user/user.service";

import { HeaderUsecase } from "./header.usecase";

export class HeaderUsecaseImpl extends HeaderUsecase {
  constructor(userService: UserService) {
    super(userService);
  }
  getInfo(idUser: number): Observable<HeaderPresenter> {
    return this.userService.getById(idUser).pipe(
      map(
        (user) =>
          new HeaderPresenter({
            title: "Header Title",
            description: "Header Description",
            user: user,
          })
      )
    );
  }
}
