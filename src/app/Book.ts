enum status {
    NotRead = 0,
    NowReading = 1,
    FinishedReading = 2
}

export interface Book {
    id?: number;
    title: string;
    author: string;
    ownership: boolean;
    status: status;
}