import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex ;
    align-items:center;
    justify-content: space-between;
    margin-top: 20px;
    padding:0 40px ;
   
`
export const WrapperStatusCount = styled.div`
    display: flex ;
    align-items:center;
    div {
        margin:8px;
        text-align: center ;
    }
`

export const WrapperUserName = styled.div`
    display: flex ;
    align-items:center;
    gap:8px;


    a {
        font-size:18px;
        color: blue;
        font-weight:bold ;
    }
`
export const WrapperInfo = styled.div`
    display: flex ;
    flex-direction:column;
    align-items:flex-start;
    justify-content: space-between;
    margin-left: 8px;
    height: 200px;

    h1 {
        font-size: 32px;
        font-weight: bold;
    }

    h3 {
        font-size:18px;
        font-weight: bold;
    }

    h4 {
        font-size: 16px;
        font-weight: bold;
    }

    a {
        color: #D4CCB6;
    }
`
export const WrapperImg = styled.img`
    border-radius:50%;
    width: 200px;
    margin:8px ;
`

