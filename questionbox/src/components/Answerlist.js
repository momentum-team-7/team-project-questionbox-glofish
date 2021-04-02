import Answers from "./Answers";

export default function AnswerList({ answerdata }) {
    return (
        <>
            {answerdata.map((answer, index) => (
                <Answers key={index} {...answer} />
            ))}
        </>
    )
}