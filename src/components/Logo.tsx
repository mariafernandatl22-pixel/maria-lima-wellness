const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`font-serif ${className}`}>
      <div className="relative inline-block">
        <div className="bg-gradient-primary bg-clip-text text-transparent font-bold tracking-tight">
          Maria Fernanda T Lima
        </div>
        <div className="text-xs tracking-widest text-muted-foreground mt-1 uppercase">
          Nutricionista
        </div>
      </div>
    </div>
  );
};

export default Logo;
