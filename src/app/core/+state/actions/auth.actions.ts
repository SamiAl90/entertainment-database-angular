import { Action } from '@ngrx/store';
import { IdentityToken, RegisterUser, IdentityUser, UserCredentials, AuthenticationProvider } from '@etdb/core/models';

export enum AuthActionTypes {
    CredentialSignIn = '[Auth API] User Credential SignIn',
    ProviderSignIn = '[Auth API] User Provider SignIn',
    Authenticated = '[Auth API] User SignedIn',
    AuthenticationFailed = '[Auth API] User SignIn failed',
    SignOut = '[Auth API] SignOut',
    Register = '[Auth API] User Register',
    Registered = '[Auth API] User Registered',
    RegisterFailed = '[Auth API] User Register failed',
    RestoreAuthentication = '[Auth API] Restore SignIn',
    RestoreAuthenticationCompleted = '[Auth API] Restore completed',
    IdentityUserLoad = '[Auth API] Identity-User Load',
    IdentityUserLoaded = '[Auth API] Identity-User Loaded',
    IdentityUserLoadFailed = '[Auth API] Identity-User Load failed',
    SetGoogleAuthAvailable = '[Auth API] Set Google-Auth available',
    SetFacebookAuthAvailable = '[Auth API] Set Facebook-Auth available',
}

export class CredentialSignIn implements Action {
    readonly type = AuthActionTypes.CredentialSignIn;
    public constructor(public signIn: UserCredentials) { }
}

export class ProviderSignIn implements Action {
    readonly type = AuthActionTypes.ProviderSignIn;
    public constructor(public provider: AuthenticationProvider, public token: string) { }
}

export class SignedIn implements Action {
    readonly type = AuthActionTypes.Authenticated;
    public constructor(public token: IdentityToken, public navigateToRoot = false) { }
}

export class SignInFailed implements Action {
    readonly type = AuthActionTypes.AuthenticationFailed;
    public constructor(public error: Error) { }
}

export class SignOut implements Action {
    readonly type = AuthActionTypes.SignOut;
}

export class Register implements Action {
    readonly type = AuthActionTypes.Register;
    public constructor(public registerUser: RegisterUser) { }
}

export class Registered implements Action {
    readonly type = AuthActionTypes.Registered;
    public constructor(public signIn: UserCredentials) { }
}

export class RegisterFailed implements Action {
    readonly type = AuthActionTypes.RegisterFailed;
    public constructor(public error: Error) { }
}

export class RestoreAuthentication implements Action {
    readonly type = AuthActionTypes.RestoreAuthentication;
    public constructor(public emitAuthenticationState: boolean) { }
}

export class RestoreAuthenticationCompleted implements Action {
    readonly type = AuthActionTypes.RestoreAuthenticationCompleted;
}

export class IdentityUserLoad implements Action {
    readonly type = AuthActionTypes.IdentityUserLoad;
}

export class IdentityUserLoaded implements Action {
    readonly type = AuthActionTypes.IdentityUserLoaded;
    public constructor(public identityUser: IdentityUser) { }
}

export class IdentityUserLoadFailed implements Action {
    readonly type = AuthActionTypes.IdentityUserLoadFailed;
    public constructor(public error: Error) { }
}

export class SetGoogleAuthAvailable implements Action {
    readonly type = AuthActionTypes.SetGoogleAuthAvailable;
    public constructor(public available: boolean = true) { }
}

export class SetFacebookAuthAvailable implements Action {
    readonly type = AuthActionTypes.SetFacebookAuthAvailable;
    public constructor(public available: boolean = true) { }
}

export declare type AuthActionUnion =
    | CredentialSignIn
    | ProviderSignIn
    | SignedIn
    | SignInFailed
    | SignOut
    | RestoreAuthentication
    | RestoreAuthenticationCompleted
    | Register
    | Registered
    | RegisterFailed
    | IdentityUserLoad
    | IdentityUserLoaded
    | IdentityUserLoadFailed
    | SetGoogleAuthAvailable
    | SetFacebookAuthAvailable;
