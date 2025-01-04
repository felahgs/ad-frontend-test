import Loader from "@/components/Loader";

export default function Loading() {
  return (
    <div className="flex items-center justify-center w-full  min-h-[50vh] ">
      <Loader iconClass="w-20 h-20" />
    </div>
  );
}
