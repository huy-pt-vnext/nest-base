export interface DatabaseConnection {
	connect(): Promise<void>;
	disconnect(): Promise<void>;
	isConnected(): boolean;
}

export abstract class BaseDatabase implements DatabaseConnection {
	protected connected = false;

	abstract connect(): Promise<void>;
	abstract disconnect(): Promise<void>;

	isConnected(): boolean {
		return this.connected;
	}
}
