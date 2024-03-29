import { httpClientImpl, httpClientMock } from "@/cores/libs/http";

import { UserServiceImpl } from "./user.impl.service";
import { UserServiceMock } from "./user.mock.service";
import { UserService } from "./user.service";

const userUrl = "/users";

export const userServiceMock: UserService = new UserServiceMock(userUrl, httpClientMock);

export const userServiceImpl: UserService = new UserServiceImpl(userUrl, httpClientImpl);
