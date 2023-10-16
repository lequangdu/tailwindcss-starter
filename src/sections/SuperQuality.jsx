import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          I am a <span className="text-coral-red inline-block mt-3">Super</span>{" "}
          <span className="text-coral-red inline-block mt-3">quality</span>{" "}
          shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptate, voluptatibus, quod, quidem quia quos natus dolorum
          exercitationem voluptatem quibusdam fugiat.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptate, voluptatibus, quod.
        </p>

        <div className="mt-11">
          <Button label="View detail" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="shoe-8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
