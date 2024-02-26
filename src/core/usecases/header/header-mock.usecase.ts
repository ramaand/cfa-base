import { BehaviorSubject, Observable } from "rxjs";

import { UserDomain } from "@/domain/user.domain";
import { UserService } from "@/services/user/user.service";
import { HeaderPresenter } from "@/presenters/header.presenter";

import { HeaderUsecase } from "./header.usecase";

export class HeaderUsecaseMock extends HeaderUsecase {
  constructor(userService: UserService) {
    super(userService);
  }

  getInfo(idUser: number): Observable<HeaderPresenter> {
    return new BehaviorSubject(
      new HeaderPresenter({
        title: "Header Title",
        description: "Header Description",
        user: new UserDomain({
          name: "User Name",
          email: "User@Email",
        }),
      })
    );
  }
}
