import audio from "../assets/audio.mp3";

export default function () {
    return (
        <>
            <audio src={audio} controls className="w-5/6 m-auto pt-3"></audio>
            <section>
                <p>
                    Started: <span>01 Dec 2024</span>
                </p>
                <p>
                    Last Updated: <span>11 Dec 2024</span>
                </p>
                <p>
                    Total Qaza: <span>4</span>
                </p>
                <p>
                    The Most Common Cause of Qaza: <span>Sleep</span>
                </p>
            </section>
        </>
    );
}
