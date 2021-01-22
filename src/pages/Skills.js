import React from 'react';
import styled from "@emotion/styled";
import {SkillData} from "../data/SkillData";

function Skills() {
    const SkillContent = styled.div`

`

return (
    <SkillContent>
        {SkillData.map((item) => (
            <>
            <h1>{item.nomCat}</h1>
            <h1>{item.categories}</h1>
            <h1>{item.name}</h1>
            </>
        ))}
    </SkillContent>
    );
}

export default Skills;