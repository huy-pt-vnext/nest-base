import { HttpException, HttpStatus } from '@nestjs/common';

export class BadRequestException extends HttpException {
	constructor(message: string = 'Bad Request') {
		super(message, HttpStatus.BAD_REQUEST);
	}
}

export class NotFoundedException extends HttpException {
	constructor(message: string = 'Resource not found') {
		super(message, HttpStatus.NOT_FOUND);
	}
}

export class ConflictException extends HttpException {
	constructor(message: string = 'Conflict') {
		super(message, HttpStatus.CONFLICT);
	}
}

export class UnauthorizedException extends HttpException {
	constructor(message: string = 'Unauthorized') {
		super(message, HttpStatus.UNAUTHORIZED);
	}
}

export class ForbiddenException extends HttpException {
	constructor(message: string = 'Forbidden') {
		super(message, HttpStatus.FORBIDDEN);
	}
}

export class InternalServerErrorException extends HttpException {
	constructor(message: string = 'Internal Server Error') {
		super(message, HttpStatus.INTERNAL_SERVER_ERROR);
	}
}
