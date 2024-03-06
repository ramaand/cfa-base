import { BehaviorSubject, Observable } from 'rxjs';

import { UserDomain } from '@/cores/entities/domains/user.domain';
import { HeaderPresenter } from '@/cores/entities/presenters/header.presenter';
import { UserService } from '@/cores/services/user/user.service';

import { HeaderUsecase } from './header.usecase';

export class HeaderUsecaseMock extends HeaderUsecase {
  constructor(userService: UserService) {
    super(userService);
  }

  getInfo(idUser: number): Observable<HeaderPresenter> {
    return new BehaviorSubject(
      new HeaderPresenter({
        title: 'Header Title',
        description: 'Header Description',
        user: new UserDomain({
          name: 'User Name',
          email: 'User@Email',
        }),
      })
    );
  }
}
