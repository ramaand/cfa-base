export type TUserDomain = {
  id?: string | number;
  name: string;
  email: string;
};

export class UserDomain implements TUserDomain {
  id?: string | number | undefined;
  name: string;
  email: string;

  constructor(user: TUserDomain) {
    this.name = user.name;
    this.email = user.email;

    if (user.id) {
      this.id = user.id;
    }
  }

  // Additional methods and business logic related to User entity can go here
}
