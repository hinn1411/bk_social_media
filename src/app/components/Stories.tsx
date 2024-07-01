import Image from "next/image";

const Stories = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-scroll text-xs scrollbar-hide">
      <div className="flex gap-8 w-max">
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/26732346/pexels-photo-26732346/free-photo-of-a-record-player-sits-on-a-table-with-flowers-in-a-vase.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">Risky</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/26732346/pexels-photo-26732346/free-photo-of-a-record-player-sits-on-a-table-with-flowers-in-a-vase.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">Risky</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/26732346/pexels-photo-26732346/free-photo-of-a-record-player-sits-on-a-table-with-flowers-in-a-vase.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">Risky</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/26732346/pexels-photo-26732346/free-photo-of-a-record-player-sits-on-a-table-with-flowers-in-a-vase.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">Risky</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/26732346/pexels-photo-26732346/free-photo-of-a-record-player-sits-on-a-table-with-flowers-in-a-vase.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">Risky</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/26732346/pexels-photo-26732346/free-photo-of-a-record-player-sits-on-a-table-with-flowers-in-a-vase.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">Risky</span>
        </div>
      </div>
    </div>
  );
};

export default Stories;
