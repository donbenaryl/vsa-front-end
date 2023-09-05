export interface IConfirmDialogData {
    title: string;
    before?: string;
    after?: string;
    confirmText: string;
    cancelText: string;
}

export interface IConfirmWithCancelDialogData {
    title: string;
    yesText: string;
    noText: string;
    cancelText: string;
}
