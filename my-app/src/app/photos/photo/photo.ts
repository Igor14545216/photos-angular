export interface Photo {
    id: number;
    postDate: Date;
    url: string;
    description: string;
    allowComments: boolean;
    likes: number;
    comments: number;
    userId: number;
}

// Se eu quiser mudar uma propriedade em todos os lugares, eu seleciono ela, clico com o botão direito e vou em rename symbol