import audio from "../assets/audio.mp3";

export default function () {
    return (
        <>
            <div className="flex flex-row justify-center gap-5 p-3 flex-wrap">
                <span>Start - 01 Dec 24</span>
                <span>Updated - 13 Dec 24</span>
                <span>Qaza - 0</span>
                <span>Most Common Reason - Sleep</span>
            </div>
            <audio src={audio} controls className="w-5/6 m-auto h-8"></audio>
        </>
    );
}
