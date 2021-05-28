import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    padding: 16px;

    input{
        height: 36px;
        width: 100%;
        border: 1px solid #373E47;
        border-radius: 4px;
        background: #22272E;
        color: #CDD9E5;
        padding: 4px;

    }

`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid #444C56;

    padding: 16px 0;
    
    h1{
        font-size: 20px;
        font-weight: 600;
        color: #ADBAC7;
    }
`;

export const Content = styled.div`
    display: flex;
    width: 100%;
    padding: 24px 0;
    border-bottom: 1px solid #444C56;

    div:first-child{
        margin-right: 8px;

        svg{
            height: 16px;
            width: 16px;
            color: #6A737D;
        }
    }

    div:last-child{
       
        >p{
            font-size: 14px;
            margin-bottom: 4px;
            color: #ADBAC7;
        }

        >p:first-child{
            font-size: 16px;
            color: #539BF5;
            font-weight: 500;
            cursor: pointer;

            &:hover{
                text-decoration: underline;
                
            }
        }

        div{
            display: flex;

            span:first-child{
                display: flex;
                align-items: flex-start;
                
                svg{
                    height: 12px;
                    width: 12px;
                    color: #ADBAC7;
                    margin-right: 2px;
                }
            }

            span{
                & + span{
                    margin-left: 16px;
                }

                p{
                    font-size: 12px;
                    margin-bottom: 4px;
                    color: #ADBAC7;
                }
            }

            

        }
    }
`;