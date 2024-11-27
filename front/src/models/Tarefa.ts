import { Categoria } from "./Categoria";

export interface Tarefa {
tarefaId? : string;
titulo : string;
descricao : string;
status : string;
criadoEm? : string;
categoria? : Categoria;
categoriaId : string;
}