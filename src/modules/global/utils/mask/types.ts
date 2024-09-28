export type InputType = string | null;

export interface MaskUtils {
	maskCPF(string?: InputType, hidden?: boolean): string;
	maskCNPJ: (string: InputType, hidden?: boolean | undefined) => string;
	maskCellPhone: (string?: InputType, hidden?: boolean | undefined) => string;
	maskEmail: (string: InputType, hidden?: boolean) => string;
	maskHidden(string?: InputType): string;
	maskDocuments: (string: string, hidden?: boolean) => string;
	mask: (string: InputType, hidden?: boolean) => string;
}
