

// useOthent
export interface useOthentProps {
    API_ID: string
}
export interface useOthentReturnProps {
    getAPIID(): Promise<getAPIIDReturnProps>,
    addCallbackURL(params: addCallbackURLProps): Promise<addCallbackURLReturnProps>,
    ping(): Promise<PingReturnProps>,
    logIn(): Promise<void | LogInReturnProps>,
    logOut(): Promise<LogOutReturnProps>,
    userDetails(): Promise<UserDetailsReturnProps>,
    readContract(): Promise<ReadContractReturnProps>,
    signTransactionWarp(params: SignTransactionWarpProps): Promise<SignTransactionWarpReturnProps>,
    sendTransactionWarp(params: SendTransactionWarpProps): Promise<SendTransactionWarpReturnProps>,
    signTransactionArweave(params: SignTransactionArweaveProps): Promise<SignTransactionArweaveReturnProps>,
    sendTransactionArweave(params: SendTransactionArweaveProps): Promise<SendTransactionArweaveReturnProps>,
    signTransactionBundlr(params: SignTransactionBundlrProps): Promise<SignTransactionBundlrReturnProps>,
    sendTransactionBundlr(params: SendTransactionBundlrProps): Promise<SendTransactionBundlrReturnProps>,
    initializeJWK(params: InitializeJWKProps): Promise<InitializeJWKReturnProps>,
    JWKBackupTxn(params: JWKBackupTxnProps): Promise<JWKBackupTxnReturnProps>,
    readCustomContract(params: readCustomContractProps): Promise<readCustomContractReturnProps>,
  }
  




// universal
export interface DecodedJWT {
    contract_id: string,
    given_name: string,
    family_name: string,
    nickname: string,
    name: string,
    picture: string,
    locale: string,
    updated_at?: string,
    email: string,
    email_verified: string,
    iss?: string,
    aud?: string,
    iat?: number,
    exp?: number,
    sub: string,
    sid?: string,
    nonce?: string
}



// get API keys
export interface getAPIIDReturnProps {
    API_ID: string
}
export interface API_ID_JWT {
    contract_id: string,
    given_name: string,
    family_name: string,
    nickname: string,
    name: string,
    picture: string,
    locale: string,
    updated_at?: string,
    email: string,
    email_verified: string,
    iss: string,
    aud: string,
    iat: number,
    exp: number,
    sub: string,
    sid: string,
    nonce: string
    API_KEY: string,
    API_ID: string
}

export interface CustomAuthParams {
    [key: string]: any;
}

export interface addCallbackURLProps {
    callbackURL: string
}
export interface addCallbackURLReturnProps {
    response: boolean,
    message: string
}




// ping
export interface PingReturnProps {
    response: boolean;
}





// logIn
export interface LogInReturnProps {
    contract_id?: string,
    given_name?: string,
    family_name?: string,
    nickname?: string,
    name?: string,
    picture?: string,
    locale?: string,
    email?: string,
    email_verified?: string,
    sub?: string,
    success?: string,
    message?: string
}



// log out
export interface LogOutReturnProps {
    response: string
}


// user details
export interface UserDetailsReturnProps {
    contract_id: string,
    given_name: string,
    family_name: string,
    nickname: string,
    name: string,
    picture: string,
    locale: string,
    email: string,
    email_verified: string,
    sub: string,
}



// read contract
export interface ReadContractReturnProps {
    state: object, 
    errors: object, 
    validity: object
}




// sign transaction Warp
export interface SignTransactionWarpProps {
    othentFunction: string,
    data: {
        toContractId: string,
        toContractFunction: string,
        txnData: object
    }
    tags?: {
        name: string;
        value: string;
    }[]
}
export interface SignTransactionWarpReturnProps {
    JWT: string, 
    tags?: {
        name: string;
        value: string;
    }[]
}
// send transaction - Warp
export interface SendTransactionWarpProps {
    JWT: string,
    tags?: {
        name: string;
        value: string;
    }[]
}
export interface SendTransactionWarpReturnProps {
    success: boolean,
    transactionId: string,
    bundlrId: string,
    errors: object,
    state: object
}





// sign transaction Arweave
export interface SignTransactionArweaveProps {
    othentFunction: string,
    data: File, 
    tags?: {
        name: string;
        value: string;
    }[]
}
export interface SignTransactionArweaveReturnProps {
    data: File, 
    JWT: string
    tags?: {
        name: string;
        value: string;
    }[]
}
// send transaction - Arweave
export interface SendTransactionArweaveProps {
    data: File, 
    JWT: string,
    tags?: {
        name: string;
        value: string;
    }[]
}
export interface SendTransactionArweaveReturnProps {
    success: boolean,
    transactionId: string,
}



// sign transaction - bundlr
export interface SignTransactionBundlrProps {
    othentFunction: string;
    data: File;
    tags?: {
      name: string;
      value: string;
    }[];
  }
  
  export interface SignTransactionBundlrReturnProps {
    data: File;
    JWT: string;
    tags?: {
      name: string;
      value: string;
    }[];
  }
  
  // send transaction - bundlr
  export interface SendTransactionBundlrProps {
    data: File;
    JWT: string;
    tags?: {
      name: string;
      value: string;
    }[];
  }
  
  export interface SendTransactionBundlrReturnProps {
    success: boolean;
    transactionId: string;
  }



// backup keyfile
export interface InitializeJWKProps {
    privateKey: object
}
export interface InitializeJWKReturnProps {
    success: boolean,
    transactionId: string,
}



// JWK transaction
export interface JWKBackupTxnProps {
    privateKey: {
        kty: "RSA";
        e: string;
        n: string;
        d?: string | undefined;
        p?: string | undefined;
        q?: string | undefined;
        dp?: string | undefined;
        dq?: string | undefined;
        qi?: string | undefined;
    },
    sub: string,
    contract_id: string,
    tags?: { name: string, value: string }[],
    data: object,
    othentFunction: string
}
export interface JWKBackupTxnReturnProps {
    validity: boolean,
    transactionId: string,
}



// Read custom contract
export interface readCustomContractProps {
    contract_id: string
}
export interface readCustomContractReturnProps {
    state: object, 
    errors: object, 
    validity: object
}











