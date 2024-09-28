//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v14.1.0.0 (NJsonSchema v11.0.2.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming

import { inject } from 'aurelia-framework';
import { HttpClient, RequestInit } from 'aurelia-fetch-client';

@inject(String, HttpClient)
export class DummyClient {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : window as any;
        this.baseUrl = baseUrl ?? "";
    }

    dummyEvent(): Promise<Event> {
        let url_ = this.baseUrl + "/api/Dummy/DummyEvent";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processDummyEvent(_response);
        });
    }

    protected processDummyEvent(response: Response): Promise<Event> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = Event.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<Event>(null as any);
    }

    dummyFullData(): Promise<BRPFullData> {
        let url_ = this.baseUrl + "/api/Dummy/DummyFullData";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processDummyFullData(_response);
        });
    }

    protected processDummyFullData(response: Response): Promise<BRPFullData> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = BRPFullData.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<BRPFullData>(null as any);
    }

    dummySession(): Promise<Session> {
        let url_ = this.baseUrl + "/api/Dummy/DummySession";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processDummySession(_response);
        });
    }

    protected processDummySession(response: Response): Promise<Session> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = Session.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<Session>(null as any);
    }
}

export abstract class Event implements IEvent {
    eventId?: number;
    sessionId?: string | undefined;
    createdAt?: Date;
    recievedAt?: Date;
    processedAt?: Date;
    isProcessed?: boolean;
    isSuccessful?: boolean;

    protected _discriminator: string;

    constructor(data?: IEvent) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
        this._discriminator = "Event";
    }

    init(_data?: any) {
        if (_data) {
            this.eventId = _data["eventId"];
            this.sessionId = _data["sessionId"];
            this.createdAt = _data["createdAt"] ? new Date(_data["createdAt"].toString()) : <any>undefined;
            this.recievedAt = _data["recievedAt"] ? new Date(_data["recievedAt"].toString()) : <any>undefined;
            this.processedAt = _data["processedAt"] ? new Date(_data["processedAt"].toString()) : <any>undefined;
            this.isProcessed = _data["isProcessed"];
            this.isSuccessful = _data["isSuccessful"];
        }
    }

    static fromJS(data: any): Event {
        data = typeof data === 'object' ? data : {};
        if (data["discriminator"] === "AddSessionEvent") {
            let result = new AddSessionEvent();
            result.init(data);
            return result;
        }
        if (data["discriminator"] === "AddSquadEvent") {
            let result = new AddSquadEvent();
            result.init(data);
            return result;
        }
        throw new Error("The abstract class 'Event' cannot be instantiated.");
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["discriminator"] = this._discriminator;
        data["eventId"] = this.eventId;
        data["sessionId"] = this.sessionId;
        data["createdAt"] = this.createdAt ? this.createdAt.toISOString() : <any>undefined;
        data["recievedAt"] = this.recievedAt ? this.recievedAt.toISOString() : <any>undefined;
        data["processedAt"] = this.processedAt ? this.processedAt.toISOString() : <any>undefined;
        data["isProcessed"] = this.isProcessed;
        data["isSuccessful"] = this.isSuccessful;
        return data;
    }
}

export interface IEvent {
    eventId?: number;
    sessionId?: string | undefined;
    createdAt?: Date;
    recievedAt?: Date;
    processedAt?: Date;
    isProcessed?: boolean;
    isSuccessful?: boolean;
}

export class AddSessionEvent extends Event implements IAddSessionEvent {
    sessionName?: string | undefined;

    constructor(data?: IAddSessionEvent) {
        super(data);
        this._discriminator = "AddSessionEvent";
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.sessionName = _data["sessionName"];
        }
    }

    static override fromJS(data: any): AddSessionEvent {
        data = typeof data === 'object' ? data : {};
        let result = new AddSessionEvent();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["sessionName"] = this.sessionName;
        super.toJSON(data);
        return data;
    }
}

export interface IAddSessionEvent extends IEvent {
    sessionName?: string | undefined;
}

export class AddSquadEvent extends Event implements IAddSquadEvent {
    squadName?: string | undefined;
    squadId?: number | undefined;

    constructor(data?: IAddSquadEvent) {
        super(data);
        this._discriminator = "AddSquadEvent";
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.squadName = _data["squadName"];
            this.squadId = _data["squadId"];
        }
    }

    static override fromJS(data: any): AddSquadEvent {
        data = typeof data === 'object' ? data : {};
        let result = new AddSquadEvent();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["squadName"] = this.squadName;
        data["squadId"] = this.squadId;
        super.toJSON(data);
        return data;
    }
}

export interface IAddSquadEvent extends IEvent {
    squadName?: string | undefined;
    squadId?: number | undefined;
}

export class BRPFullData implements IBRPFullData {
    squads?: Squad[] | undefined;
    squadBoards?: SquadBoard[] | undefined;
    tickets?: Ticket[] | undefined;
    quarterYears?: QuarterYear[] | undefined;
    dependencies?: Dependency[] | undefined;
    dependencyBoards?: DependencyBoard[] | undefined;
    lastEventId?: number;

    constructor(data?: IBRPFullData) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            if (Array.isArray(_data["squads"])) {
                this.squads = [] as any;
                for (let item of _data["squads"])
                    this.squads!.push(Squad.fromJS(item));
            }
            if (Array.isArray(_data["squadBoards"])) {
                this.squadBoards = [] as any;
                for (let item of _data["squadBoards"])
                    this.squadBoards!.push(SquadBoard.fromJS(item));
            }
            if (Array.isArray(_data["tickets"])) {
                this.tickets = [] as any;
                for (let item of _data["tickets"])
                    this.tickets!.push(Ticket.fromJS(item));
            }
            if (Array.isArray(_data["quarterYears"])) {
                this.quarterYears = [] as any;
                for (let item of _data["quarterYears"])
                    this.quarterYears!.push(QuarterYear.fromJS(item));
            }
            if (Array.isArray(_data["dependencies"])) {
                this.dependencies = [] as any;
                for (let item of _data["dependencies"])
                    this.dependencies!.push(Dependency.fromJS(item));
            }
            if (Array.isArray(_data["dependencyBoards"])) {
                this.dependencyBoards = [] as any;
                for (let item of _data["dependencyBoards"])
                    this.dependencyBoards!.push(DependencyBoard.fromJS(item));
            }
            this.lastEventId = _data["lastEventId"];
        }
    }

    static fromJS(data: any): BRPFullData {
        data = typeof data === 'object' ? data : {};
        let result = new BRPFullData();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (Array.isArray(this.squads)) {
            data["squads"] = [];
            for (let item of this.squads)
                data["squads"].push(item.toJSON());
        }
        if (Array.isArray(this.squadBoards)) {
            data["squadBoards"] = [];
            for (let item of this.squadBoards)
                data["squadBoards"].push(item.toJSON());
        }
        if (Array.isArray(this.tickets)) {
            data["tickets"] = [];
            for (let item of this.tickets)
                data["tickets"].push(item.toJSON());
        }
        if (Array.isArray(this.quarterYears)) {
            data["quarterYears"] = [];
            for (let item of this.quarterYears)
                data["quarterYears"].push(item.toJSON());
        }
        if (Array.isArray(this.dependencies)) {
            data["dependencies"] = [];
            for (let item of this.dependencies)
                data["dependencies"].push(item.toJSON());
        }
        if (Array.isArray(this.dependencyBoards)) {
            data["dependencyBoards"] = [];
            for (let item of this.dependencyBoards)
                data["dependencyBoards"].push(item.toJSON());
        }
        data["lastEventId"] = this.lastEventId;
        return data;
    }
}

export interface IBRPFullData {
    squads?: Squad[] | undefined;
    squadBoards?: SquadBoard[] | undefined;
    tickets?: Ticket[] | undefined;
    quarterYears?: QuarterYear[] | undefined;
    dependencies?: Dependency[] | undefined;
    dependencyBoards?: DependencyBoard[] | undefined;
    lastEventId?: number;
}

export class Squad implements ISquad {
    squadId?: number;
    name?: string | undefined;

    constructor(data?: ISquad) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.squadId = _data["squadId"];
            this.name = _data["name"];
        }
    }

    static fromJS(data: any): Squad {
        data = typeof data === 'object' ? data : {};
        let result = new Squad();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["squadId"] = this.squadId;
        data["name"] = this.name;
        return data;
    }
}

export interface ISquad {
    squadId?: number;
    name?: string | undefined;
}

export class SquadBoard implements ISquadBoard {
    squadBoardId?: number;
    squadId?: number;
    quarterYearId?: number;

    constructor(data?: ISquadBoard) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.squadBoardId = _data["squadBoardId"];
            this.squadId = _data["squadId"];
            this.quarterYearId = _data["quarterYearId"];
        }
    }

    static fromJS(data: any): SquadBoard {
        data = typeof data === 'object' ? data : {};
        let result = new SquadBoard();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["squadBoardId"] = this.squadBoardId;
        data["squadId"] = this.squadId;
        data["quarterYearId"] = this.quarterYearId;
        return data;
    }
}

export interface ISquadBoard {
    squadBoardId?: number;
    squadId?: number;
    quarterYearId?: number;
}

export class Ticket implements ITicket {
    ticketId?: number;
    squadId?: number;
    squardBoardId?: number;
    requirementIds?: number[] | undefined;
    targetIds?: number[] | undefined;

    constructor(data?: ITicket) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.ticketId = _data["ticketId"];
            this.squadId = _data["squadId"];
            this.squardBoardId = _data["squardBoardId"];
            if (Array.isArray(_data["requirementIds"])) {
                this.requirementIds = [] as any;
                for (let item of _data["requirementIds"])
                    this.requirementIds!.push(item);
            }
            if (Array.isArray(_data["targetIds"])) {
                this.targetIds = [] as any;
                for (let item of _data["targetIds"])
                    this.targetIds!.push(item);
            }
        }
    }

    static fromJS(data: any): Ticket {
        data = typeof data === 'object' ? data : {};
        let result = new Ticket();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["ticketId"] = this.ticketId;
        data["squadId"] = this.squadId;
        data["squardBoardId"] = this.squardBoardId;
        if (Array.isArray(this.requirementIds)) {
            data["requirementIds"] = [];
            for (let item of this.requirementIds)
                data["requirementIds"].push(item);
        }
        if (Array.isArray(this.targetIds)) {
            data["targetIds"] = [];
            for (let item of this.targetIds)
                data["targetIds"].push(item);
        }
        return data;
    }
}

export interface ITicket {
    ticketId?: number;
    squadId?: number;
    squardBoardId?: number;
    requirementIds?: number[] | undefined;
    targetIds?: number[] | undefined;
}

export class QuarterYear implements IQuarterYear {
    quarterYearId?: number;
    startDay?: Date;
    endDay?: Date;
    bigRoomPlanningAt?: Date;

    constructor(data?: IQuarterYear) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.quarterYearId = _data["quarterYearId"];
            this.startDay = _data["startDay"] ? new Date(_data["startDay"].toString()) : <any>undefined;
            this.endDay = _data["endDay"] ? new Date(_data["endDay"].toString()) : <any>undefined;
            this.bigRoomPlanningAt = _data["bigRoomPlanningAt"] ? new Date(_data["bigRoomPlanningAt"].toString()) : <any>undefined;
        }
    }

    static fromJS(data: any): QuarterYear {
        data = typeof data === 'object' ? data : {};
        let result = new QuarterYear();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["quarterYearId"] = this.quarterYearId;
        data["startDay"] = this.startDay ? this.startDay.toISOString() : <any>undefined;
        data["endDay"] = this.endDay ? this.endDay.toISOString() : <any>undefined;
        data["bigRoomPlanningAt"] = this.bigRoomPlanningAt ? this.bigRoomPlanningAt.toISOString() : <any>undefined;
        return data;
    }
}

export interface IQuarterYear {
    quarterYearId?: number;
    startDay?: Date;
    endDay?: Date;
    bigRoomPlanningAt?: Date;
}

export class Dependency implements IDependency {
    dependencyId?: number;

    constructor(data?: IDependency) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.dependencyId = _data["dependencyId"];
        }
    }

    static fromJS(data: any): Dependency {
        data = typeof data === 'object' ? data : {};
        let result = new Dependency();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["dependencyId"] = this.dependencyId;
        return data;
    }
}

export interface IDependency {
    dependencyId?: number;
}

export class DependencyBoard implements IDependencyBoard {
    dependencyBoardId?: number;
    quarterYearId?: number;

    constructor(data?: IDependencyBoard) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.dependencyBoardId = _data["dependencyBoardId"];
            this.quarterYearId = _data["quarterYearId"];
        }
    }

    static fromJS(data: any): DependencyBoard {
        data = typeof data === 'object' ? data : {};
        let result = new DependencyBoard();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["dependencyBoardId"] = this.dependencyBoardId;
        data["quarterYearId"] = this.quarterYearId;
        return data;
    }
}

export interface IDependencyBoard {
    dependencyBoardId?: number;
    quarterYearId?: number;
}

export class Session implements ISession {
    sessionId?: string | undefined;
    username?: string | undefined;
    createdAt?: Date;

    constructor(data?: ISession) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.sessionId = _data["sessionId"];
            this.username = _data["username"];
            this.createdAt = _data["createdAt"] ? new Date(_data["createdAt"].toString()) : <any>undefined;
        }
    }

    static fromJS(data: any): Session {
        data = typeof data === 'object' ? data : {};
        let result = new Session();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["sessionId"] = this.sessionId;
        data["username"] = this.username;
        data["createdAt"] = this.createdAt ? this.createdAt.toISOString() : <any>undefined;
        return data;
    }
}

export interface ISession {
    sessionId?: string | undefined;
    username?: string | undefined;
    createdAt?: Date;
}

export class ApiException extends Error {
    override message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isApiException = true;

    static isApiException(obj: any): obj is ApiException {
        return obj.isApiException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): any {
    if (result !== null && result !== undefined)
        throw result;
    else
        throw new ApiException(message, status, response, headers, null);
}