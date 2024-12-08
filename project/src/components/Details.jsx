import audio from '../assets/audio.mp3';

export default function () {
    return (
        <>
            <audio
                src={audio}
                controls
                className="w-5/6 m-auto pt-3"
            ></audio>
            <section className="myBorder">
                <h3 className="title">From - 01 December 2024</h3>
                <h3 className="title">Updated - 09 December 2024</h3>
            </section>
        </>
    );
}
