interface Post {
    id: number;
    fullName: string;
    date: string;
    edited: boolean;
    content: string;
    image: string;
}

export default interface ITopic {
    topic: Post;
    responses: Post[];
}

