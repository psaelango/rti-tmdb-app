export const TrailerSection: React.FC = () => (
  <div>
    <div className="text-neutral-500 text-sm font-medium leading-6 tracking-wide mt-9">
      TRAILERS
    </div>
    <div className="bg-neutral-200 shrink-0 h-px mt-2.5" />
    <div className="bg-neutral-50 flex items-stretch justify-between gap-4 mt-4 pl-4 pr-20 py-4 rounded-sm">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9ea483efa9e7b34fe4bea09395265fdfc6018957c20a77980f9c4d8968ffedf?apiKey=01428c97297244d3842cd2633820c35e&"
        className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
      />
      <div className="text-neutral-500 text-sm font-medium leading-6 tracking-wide self-center grow whitespace-nowrap my-auto">
        Play trailer 1
      </div>
    </div>
    <div className="bg-neutral-50 flex items-stretch justify-between gap-4 mt-2 pl-4 pr-20 py-4 rounded-sm">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9ea483efa9e7b34fe4bea09395265fdfc6018957c20a77980f9c4d8968ffedf?apiKey=01428c97297244d3842cd2633820c35e&"
        className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
      />
      <div className="text-neutral-500 text-sm font-medium leading-6 tracking-wide self-center grow whitespace-nowrap my-auto">
        Play trailer 2
      </div>
    </div>
  </div>
);
