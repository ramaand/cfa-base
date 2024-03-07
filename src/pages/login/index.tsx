import UserAuthForm from '@/components/features/forms/user-auth.form';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const LoginPage = () => {
  return (
    <div className="p-4 lg:p-8 h-screen flex items-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            <strong>Digihub</strong>
            CMS
          </h1>
        </div>
        <Card className="w-[350px]">
          <CardHeader>
            <CardDescription className="text-center">
              Sign in to start your session
            </CardDescription>
          </CardHeader>
          <CardContent>
            <UserAuthForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
