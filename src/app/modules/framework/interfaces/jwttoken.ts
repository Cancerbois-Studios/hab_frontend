export interface JwtTokenHeader {
    "alg": string,
    "type": string
}

export interface JwtTokenPayload { 
    "username": string,
    "expire": number
}
