import { userServiceImpl, userServiceMock } from "@/core/services/user";

import { HeaderUsecaseImpl } from "./header.impl.usecase";
import { HeaderUsecaseMock } from "./header.mock.usecase";
import { HeaderUsecase } from "./header.usecase";

export const headerUsecaseMock: HeaderUsecase = new HeaderUsecaseMock(userServiceMock);

export const headerUsecaseImpl: HeaderUsecase = new HeaderUsecaseImpl(userServiceImpl);
