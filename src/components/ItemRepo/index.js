import React from "react";
import { ItemRepoContainer } from '../ItemRepo/styles';

export function ItemRepo({ repo, handleRemoveRepoItemRepo })
{
    const handleRemove = () => 
    {
        handleRemoveRepoItemRepo(repo.id);
    }

    return (
        <ItemRepoContainer onClick={handleRemove}>
            <h3>{repo.name}</h3>
            <p>{repo.full_name}</p>
            <a href={repo.html_url} rel="noreferrer" target="_blank">ver repositório</a><br/>
            <a href="#" rel="noreferrer" className="remover">Remover</a><hr /> 
        </ItemRepoContainer>
    )
}