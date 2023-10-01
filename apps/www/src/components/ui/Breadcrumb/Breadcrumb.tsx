import { cn } from '~/utils';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Breadcrumb = ({ className, children }: Props) => {
  return (
    <div className={cn('flex items-center space-x-2', className)}>
      {children}
    </div>
  );
};

export default Breadcrumb;
