export interface IFirebaseResponse {
    _id?: string;
    n_id: String,
    response: {
        success: number,
        failed: number
    }
}