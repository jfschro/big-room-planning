//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v14.1.0.0 (NJsonSchema v11.0.2.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming

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
        if (data["discriminator"] === "AddOrUpdateSquadSprintStatsEvent") {
            let result = new AddOrUpdateSquadSprintStatsEvent();
            result.init(data);
            return result;
        }
        if (data["discriminator"] === "AddPlannedPeriodEvent") {
            let result = new AddPlannedPeriodEvent();
            result.init(data);
            return result;
        }
        if (data["discriminator"] === "AddSessionEvent") {
            let result = new AddSessionEvent();
            result.init(data);
            return result;
        }
        if (data["discriminator"] === "AddSprintEvent") {
            let result = new AddSprintEvent();
            result.init(data);
            return result;
        }
        if (data["discriminator"] === "AddSquadEvent") {
            let result = new AddSquadEvent();
            result.init(data);
            return result;
        }
        if (data["discriminator"] === "AddTicketEvent") {
            let result = new AddTicketEvent();
            result.init(data);
            return result;
        }
        if (data["discriminator"] === "DeleteTicketEvent") {
            let result = new DeleteTicketEvent();
            result.init(data);
            return result;
        }
        if (data["discriminator"] === "EditPlannedPeriodEvent") {
            let result = new EditPlannedPeriodEvent();
            result.init(data);
            return result;
        }
        if (data["discriminator"] === "EditSprintEvent") {
            let result = new EditSprintEvent();
            result.init(data);
            return result;
        }
        if (data["discriminator"] === "EditSquadEvent") {
            let result = new EditSquadEvent();
            result.init(data);
            return result;
        }
        if (data["discriminator"] === "EditTicketEvent") {
            let result = new EditTicketEvent();
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

export class AddOrUpdateSquadSprintStatsEvent extends Event implements IAddOrUpdateSquadSprintStatsEvent {
    squadId?: number;
    sprintId?: number;
    capacity?: number;
    backgroundNoise?: number;

    constructor(data?: IAddOrUpdateSquadSprintStatsEvent) {
        super(data);
        this._discriminator = "AddOrUpdateSquadSprintStatsEvent";
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.squadId = _data["squadId"];
            this.sprintId = _data["sprintId"];
            this.capacity = _data["capacity"];
            this.backgroundNoise = _data["backgroundNoise"];
        }
    }

    static override fromJS(data: any): AddOrUpdateSquadSprintStatsEvent {
        data = typeof data === 'object' ? data : {};
        let result = new AddOrUpdateSquadSprintStatsEvent();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["squadId"] = this.squadId;
        data["sprintId"] = this.sprintId;
        data["capacity"] = this.capacity;
        data["backgroundNoise"] = this.backgroundNoise;
        super.toJSON(data);
        return data;
    }
}

export interface IAddOrUpdateSquadSprintStatsEvent extends IEvent {
    squadId?: number;
    sprintId?: number;
    capacity?: number;
    backgroundNoise?: number;
}

export class AddPlannedPeriodEvent extends Event implements IAddPlannedPeriodEvent {
    plannedPeriodId?: number | undefined;
    name?: string | undefined;
    startDay?: Date;
    endDay?: Date;
    bigRoomPlanningAt?: Date | undefined;

    constructor(data?: IAddPlannedPeriodEvent) {
        super(data);
        this._discriminator = "AddPlannedPeriodEvent";
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.plannedPeriodId = _data["plannedPeriodId"];
            this.name = _data["name"];
            this.startDay = _data["startDay"] ? new Date(_data["startDay"].toString()) : <any>undefined;
            this.endDay = _data["endDay"] ? new Date(_data["endDay"].toString()) : <any>undefined;
            this.bigRoomPlanningAt = _data["bigRoomPlanningAt"] ? new Date(_data["bigRoomPlanningAt"].toString()) : <any>undefined;
        }
    }

    static override fromJS(data: any): AddPlannedPeriodEvent {
        data = typeof data === 'object' ? data : {};
        let result = new AddPlannedPeriodEvent();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["plannedPeriodId"] = this.plannedPeriodId;
        data["name"] = this.name;
        data["startDay"] = this.startDay ? this.startDay.toISOString() : <any>undefined;
        data["endDay"] = this.endDay ? this.endDay.toISOString() : <any>undefined;
        data["bigRoomPlanningAt"] = this.bigRoomPlanningAt ? this.bigRoomPlanningAt.toISOString() : <any>undefined;
        super.toJSON(data);
        return data;
    }
}

export interface IAddPlannedPeriodEvent extends IEvent {
    plannedPeriodId?: number | undefined;
    name?: string | undefined;
    startDay?: Date;
    endDay?: Date;
    bigRoomPlanningAt?: Date | undefined;
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

export class AddSprintEvent extends Event implements IAddSprintEvent {
    sprintId?: number | undefined;
    name?: string | undefined;
    startsAt?: Date;
    endsAt?: Date;

    constructor(data?: IAddSprintEvent) {
        super(data);
        this._discriminator = "AddSprintEvent";
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.sprintId = _data["sprintId"];
            this.name = _data["name"];
            this.startsAt = _data["startsAt"] ? new Date(_data["startsAt"].toString()) : <any>undefined;
            this.endsAt = _data["endsAt"] ? new Date(_data["endsAt"].toString()) : <any>undefined;
        }
    }

    static override fromJS(data: any): AddSprintEvent {
        data = typeof data === 'object' ? data : {};
        let result = new AddSprintEvent();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["sprintId"] = this.sprintId;
        data["name"] = this.name;
        data["startsAt"] = this.startsAt ? this.startsAt.toISOString() : <any>undefined;
        data["endsAt"] = this.endsAt ? this.endsAt.toISOString() : <any>undefined;
        super.toJSON(data);
        return data;
    }
}

export interface IAddSprintEvent extends IEvent {
    sprintId?: number | undefined;
    name?: string | undefined;
    startsAt?: Date;
    endsAt?: Date;
}

export class AddSquadEvent extends Event implements IAddSquadEvent {
    name?: string | undefined;
    squadId?: number | undefined;

    constructor(data?: IAddSquadEvent) {
        super(data);
        this._discriminator = "AddSquadEvent";
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.name = _data["name"];
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
        data["name"] = this.name;
        data["squadId"] = this.squadId;
        super.toJSON(data);
        return data;
    }
}

export interface IAddSquadEvent extends IEvent {
    name?: string | undefined;
    squadId?: number | undefined;
}

export class AddTicketEvent extends Event implements IAddTicketEvent {
    ticketId?: number | undefined;
    squadId?: number;
    plannedPeriodId?: number;
    sprintId?: number | undefined;
    title?: string | undefined;

    constructor(data?: IAddTicketEvent) {
        super(data);
        this._discriminator = "AddTicketEvent";
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.ticketId = _data["ticketId"];
            this.squadId = _data["squadId"];
            this.plannedPeriodId = _data["plannedPeriodId"];
            this.sprintId = _data["sprintId"];
            this.title = _data["title"];
        }
    }

    static override fromJS(data: any): AddTicketEvent {
        data = typeof data === 'object' ? data : {};
        let result = new AddTicketEvent();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["ticketId"] = this.ticketId;
        data["squadId"] = this.squadId;
        data["plannedPeriodId"] = this.plannedPeriodId;
        data["sprintId"] = this.sprintId;
        data["title"] = this.title;
        super.toJSON(data);
        return data;
    }
}

export interface IAddTicketEvent extends IEvent {
    ticketId?: number | undefined;
    squadId?: number;
    plannedPeriodId?: number;
    sprintId?: number | undefined;
    title?: string | undefined;
}

export class DeleteTicketEvent extends Event implements IDeleteTicketEvent {
    ticketId?: number;

    constructor(data?: IDeleteTicketEvent) {
        super(data);
        this._discriminator = "DeleteTicketEvent";
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.ticketId = _data["ticketId"];
        }
    }

    static override fromJS(data: any): DeleteTicketEvent {
        data = typeof data === 'object' ? data : {};
        let result = new DeleteTicketEvent();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["ticketId"] = this.ticketId;
        super.toJSON(data);
        return data;
    }
}

export interface IDeleteTicketEvent extends IEvent {
    ticketId?: number;
}

export class EditPlannedPeriodEvent extends Event implements IEditPlannedPeriodEvent {
    plannedPeriodId?: number;
    name?: string | undefined;
    startDay?: Date;
    endDay?: Date;
    bigRoomPlanningAt?: Date | undefined;

    constructor(data?: IEditPlannedPeriodEvent) {
        super(data);
        this._discriminator = "EditPlannedPeriodEvent";
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.plannedPeriodId = _data["plannedPeriodId"];
            this.name = _data["name"];
            this.startDay = _data["startDay"] ? new Date(_data["startDay"].toString()) : <any>undefined;
            this.endDay = _data["endDay"] ? new Date(_data["endDay"].toString()) : <any>undefined;
            this.bigRoomPlanningAt = _data["bigRoomPlanningAt"] ? new Date(_data["bigRoomPlanningAt"].toString()) : <any>undefined;
        }
    }

    static override fromJS(data: any): EditPlannedPeriodEvent {
        data = typeof data === 'object' ? data : {};
        let result = new EditPlannedPeriodEvent();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["plannedPeriodId"] = this.plannedPeriodId;
        data["name"] = this.name;
        data["startDay"] = this.startDay ? this.startDay.toISOString() : <any>undefined;
        data["endDay"] = this.endDay ? this.endDay.toISOString() : <any>undefined;
        data["bigRoomPlanningAt"] = this.bigRoomPlanningAt ? this.bigRoomPlanningAt.toISOString() : <any>undefined;
        super.toJSON(data);
        return data;
    }
}

export interface IEditPlannedPeriodEvent extends IEvent {
    plannedPeriodId?: number;
    name?: string | undefined;
    startDay?: Date;
    endDay?: Date;
    bigRoomPlanningAt?: Date | undefined;
}

export class EditSprintEvent extends Event implements IEditSprintEvent {
    sprintId?: number;
    name?: string | undefined;
    startsAt?: Date;
    endsAt?: Date;

    constructor(data?: IEditSprintEvent) {
        super(data);
        this._discriminator = "EditSprintEvent";
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.sprintId = _data["sprintId"];
            this.name = _data["name"];
            this.startsAt = _data["startsAt"] ? new Date(_data["startsAt"].toString()) : <any>undefined;
            this.endsAt = _data["endsAt"] ? new Date(_data["endsAt"].toString()) : <any>undefined;
        }
    }

    static override fromJS(data: any): EditSprintEvent {
        data = typeof data === 'object' ? data : {};
        let result = new EditSprintEvent();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["sprintId"] = this.sprintId;
        data["name"] = this.name;
        data["startsAt"] = this.startsAt ? this.startsAt.toISOString() : <any>undefined;
        data["endsAt"] = this.endsAt ? this.endsAt.toISOString() : <any>undefined;
        super.toJSON(data);
        return data;
    }
}

export interface IEditSprintEvent extends IEvent {
    sprintId?: number;
    name?: string | undefined;
    startsAt?: Date;
    endsAt?: Date;
}

export class EditSquadEvent extends Event implements IEditSquadEvent {
    name?: string | undefined;
    squadId?: number;

    constructor(data?: IEditSquadEvent) {
        super(data);
        this._discriminator = "EditSquadEvent";
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.name = _data["name"];
            this.squadId = _data["squadId"];
        }
    }

    static override fromJS(data: any): EditSquadEvent {
        data = typeof data === 'object' ? data : {};
        let result = new EditSquadEvent();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["squadId"] = this.squadId;
        super.toJSON(data);
        return data;
    }
}

export interface IEditSquadEvent extends IEvent {
    name?: string | undefined;
    squadId?: number;
}

export class EditTicketEvent extends Event implements IEditTicketEvent {
    ticketId?: number;
    squadId?: number;
    plannedPeriodId?: number;
    sprintId?: number | undefined;
    title?: string | undefined;

    constructor(data?: IEditTicketEvent) {
        super(data);
        this._discriminator = "EditTicketEvent";
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.ticketId = _data["ticketId"];
            this.squadId = _data["squadId"];
            this.plannedPeriodId = _data["plannedPeriodId"];
            this.sprintId = _data["sprintId"];
            this.title = _data["title"];
        }
    }

    static override fromJS(data: any): EditTicketEvent {
        data = typeof data === 'object' ? data : {};
        let result = new EditTicketEvent();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["ticketId"] = this.ticketId;
        data["squadId"] = this.squadId;
        data["plannedPeriodId"] = this.plannedPeriodId;
        data["sprintId"] = this.sprintId;
        data["title"] = this.title;
        super.toJSON(data);
        return data;
    }
}

export interface IEditTicketEvent extends IEvent {
    ticketId?: number;
    squadId?: number;
    plannedPeriodId?: number;
    sprintId?: number | undefined;
    title?: string | undefined;
}

export class BRPFullData implements IBRPFullData {
    squads?: Squad[] | undefined;
    tickets?: Ticket[] | undefined;
    plannedPeriods?: PlannedPeriod[] | undefined;
    dependencies?: Dependency[] | undefined;
    dependencyBoards?: DependencyBoard[] | undefined;
    sprints?: Sprint[] | undefined;
    squadSprintStats?: SquadSprintStats[] | undefined;
    ownSession?: Session | undefined;
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
            if (Array.isArray(_data["tickets"])) {
                this.tickets = [] as any;
                for (let item of _data["tickets"])
                    this.tickets!.push(Ticket.fromJS(item));
            }
            if (Array.isArray(_data["plannedPeriods"])) {
                this.plannedPeriods = [] as any;
                for (let item of _data["plannedPeriods"])
                    this.plannedPeriods!.push(PlannedPeriod.fromJS(item));
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
            if (Array.isArray(_data["sprints"])) {
                this.sprints = [] as any;
                for (let item of _data["sprints"])
                    this.sprints!.push(Sprint.fromJS(item));
            }
            if (Array.isArray(_data["squadSprintStats"])) {
                this.squadSprintStats = [] as any;
                for (let item of _data["squadSprintStats"])
                    this.squadSprintStats!.push(SquadSprintStats.fromJS(item));
            }
            this.ownSession = _data["ownSession"] ? Session.fromJS(_data["ownSession"]) : <any>undefined;
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
        if (Array.isArray(this.tickets)) {
            data["tickets"] = [];
            for (let item of this.tickets)
                data["tickets"].push(item.toJSON());
        }
        if (Array.isArray(this.plannedPeriods)) {
            data["plannedPeriods"] = [];
            for (let item of this.plannedPeriods)
                data["plannedPeriods"].push(item.toJSON());
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
        if (Array.isArray(this.sprints)) {
            data["sprints"] = [];
            for (let item of this.sprints)
                data["sprints"].push(item.toJSON());
        }
        if (Array.isArray(this.squadSprintStats)) {
            data["squadSprintStats"] = [];
            for (let item of this.squadSprintStats)
                data["squadSprintStats"].push(item.toJSON());
        }
        data["ownSession"] = this.ownSession ? this.ownSession.toJSON() : <any>undefined;
        data["lastEventId"] = this.lastEventId;
        return data;
    }
}

export interface IBRPFullData {
    squads?: Squad[] | undefined;
    tickets?: Ticket[] | undefined;
    plannedPeriods?: PlannedPeriod[] | undefined;
    dependencies?: Dependency[] | undefined;
    dependencyBoards?: DependencyBoard[] | undefined;
    sprints?: Sprint[] | undefined;
    squadSprintStats?: SquadSprintStats[] | undefined;
    ownSession?: Session | undefined;
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

export class Ticket implements ITicket {
    ticketId?: number;
    squadId?: number;
    plannedPeriodId!: number;
    sprintId?: number | undefined;
    title?: string | undefined;

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
            this.plannedPeriodId = _data["plannedPeriodId"];
            this.sprintId = _data["sprintId"];
            this.title = _data["title"];
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
        data["plannedPeriodId"] = this.plannedPeriodId;
        data["sprintId"] = this.sprintId;
        data["title"] = this.title;
        return data;
    }
}

export interface ITicket {
    ticketId?: number;
    squadId?: number;
    plannedPeriodId: number;
    sprintId?: number | undefined;
    title?: string | undefined;
}

export class PlannedPeriod implements IPlannedPeriod {
    plannedPeriodId?: number;
    name?: string | undefined;
    startDay?: Date;
    endDay?: Date;
    bigRoomPlanningAt?: Date | undefined;

    constructor(data?: IPlannedPeriod) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.plannedPeriodId = _data["plannedPeriodId"];
            this.name = _data["name"];
            this.startDay = _data["startDay"] ? new Date(_data["startDay"].toString()) : <any>undefined;
            this.endDay = _data["endDay"] ? new Date(_data["endDay"].toString()) : <any>undefined;
            this.bigRoomPlanningAt = _data["bigRoomPlanningAt"] ? new Date(_data["bigRoomPlanningAt"].toString()) : <any>undefined;
        }
    }

    static fromJS(data: any): PlannedPeriod {
        data = typeof data === 'object' ? data : {};
        let result = new PlannedPeriod();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["plannedPeriodId"] = this.plannedPeriodId;
        data["name"] = this.name;
        data["startDay"] = this.startDay ? this.startDay.toISOString() : <any>undefined;
        data["endDay"] = this.endDay ? this.endDay.toISOString() : <any>undefined;
        data["bigRoomPlanningAt"] = this.bigRoomPlanningAt ? this.bigRoomPlanningAt.toISOString() : <any>undefined;
        return data;
    }
}

export interface IPlannedPeriod {
    plannedPeriodId?: number;
    name?: string | undefined;
    startDay?: Date;
    endDay?: Date;
    bigRoomPlanningAt?: Date | undefined;
}

export class Dependency implements IDependency {
    dependencyId?: number;
    dependantTicketId?: number;
    dependencyTicketId?: number;

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
            this.dependantTicketId = _data["dependantTicketId"];
            this.dependencyTicketId = _data["dependencyTicketId"];
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
        data["dependantTicketId"] = this.dependantTicketId;
        data["dependencyTicketId"] = this.dependencyTicketId;
        return data;
    }
}

export interface IDependency {
    dependencyId?: number;
    dependantTicketId?: number;
    dependencyTicketId?: number;
}

export class DependencyBoard implements IDependencyBoard {
    dependencyBoardId?: number;
    plannedPeriodId?: number;

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
            this.plannedPeriodId = _data["plannedPeriodId"];
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
        data["plannedPeriodId"] = this.plannedPeriodId;
        return data;
    }
}

export interface IDependencyBoard {
    dependencyBoardId?: number;
    plannedPeriodId?: number;
}

export class Sprint implements ISprint {
    sprintId?: number;
    name?: string | undefined;
    startsAt?: Date;
    endsAt?: Date;

    constructor(data?: ISprint) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.sprintId = _data["sprintId"];
            this.name = _data["name"];
            this.startsAt = _data["startsAt"] ? new Date(_data["startsAt"].toString()) : <any>undefined;
            this.endsAt = _data["endsAt"] ? new Date(_data["endsAt"].toString()) : <any>undefined;
        }
    }

    static fromJS(data: any): Sprint {
        data = typeof data === 'object' ? data : {};
        let result = new Sprint();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["sprintId"] = this.sprintId;
        data["name"] = this.name;
        data["startsAt"] = this.startsAt ? this.startsAt.toISOString() : <any>undefined;
        data["endsAt"] = this.endsAt ? this.endsAt.toISOString() : <any>undefined;
        return data;
    }
}

export interface ISprint {
    sprintId?: number;
    name?: string | undefined;
    startsAt?: Date;
    endsAt?: Date;
}

export class SquadSprintStats implements ISquadSprintStats {
    squadId?: number;
    sprintId?: number;
    capacity?: number;
    backgroundNoise?: number;

    constructor(data?: ISquadSprintStats) {
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
            this.sprintId = _data["sprintId"];
            this.capacity = _data["capacity"];
            this.backgroundNoise = _data["backgroundNoise"];
        }
    }

    static fromJS(data: any): SquadSprintStats {
        data = typeof data === 'object' ? data : {};
        let result = new SquadSprintStats();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["squadId"] = this.squadId;
        data["sprintId"] = this.sprintId;
        data["capacity"] = this.capacity;
        data["backgroundNoise"] = this.backgroundNoise;
        return data;
    }
}

export interface ISquadSprintStats {
    squadId?: number;
    sprintId?: number;
    capacity?: number;
    backgroundNoise?: number;
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