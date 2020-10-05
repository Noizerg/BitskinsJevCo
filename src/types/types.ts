export interface BaseResponse<T> {
    status: string,
    data: T
}
export interface Balance {
    available_balance: string,
    pending_withdrawals: string,
    withdrawals_balance: string,
    couponable_balance: string
}