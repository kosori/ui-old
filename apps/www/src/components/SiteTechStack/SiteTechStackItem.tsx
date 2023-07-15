type Props = {
  children: React.ReactNode;
};

export const SiteTechStackItem = ({ children }: Props) => {
  return (
    <div className='grid content-center justify-items-center gap-y-2 text-center'>
      {children}
    </div>
  );
};

export const SiteTechStackItemTitle = ({ children }: Props) => {
  return <h3 className='text-lg font-medium'>{children}</h3>;
};

export const SiteTechStackItemDescription = ({ children }: Props) => {
  return <p className='text-md text-greyText'>{children}</p>;
};
