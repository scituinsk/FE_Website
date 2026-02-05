import { Button } from "./ui/button";

interface ErrorStateUiProps {
  onRetry?: () => void;
}

const ErrorStateUi = ({ onRetry }: ErrorStateUiProps) => {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <img
          className="size-48"
          src="/assets/error_illustration.svg"
        />
        <p className="text-center">Maaf, ada yang tidak beres.</p>
        {onRetry && (
          <Button
            onClick={onRetry}
            variant="secondary"
          >
            Coba lagi
          </Button>
        )}
      </div>
    </div>
  );
};

export default ErrorStateUi;
