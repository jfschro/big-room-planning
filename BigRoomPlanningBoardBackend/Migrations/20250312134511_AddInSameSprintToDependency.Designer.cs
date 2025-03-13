﻿// <auto-generated />
using System;
using BigRoomPlanningBoardBackend;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace BigRoomPlanningBoardBackend.Migrations
{
    [DbContext(typeof(BigRoomPlanningContext))]
    [Migration("20250312134511_AddInSameSprintToDependency")]
    partial class AddInSameSprintToDependency
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "8.0.8");

            modelBuilder.Entity("BigRoomPlanningBoardBackend.Dependency", b =>
                {
                    b.Property<int>("DependencyId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("DependantTicketId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("DependencyTicketId")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("InSameSprint")
                        .HasColumnType("INTEGER");

                    b.HasKey("DependencyId");

                    b.ToTable("Dependencies");
                });

            modelBuilder.Entity("BigRoomPlanningBoardBackend.DependencyBoard", b =>
                {
                    b.Property<int>("DependencyBoardId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("PlannedPeriodId")
                        .HasColumnType("INTEGER");

                    b.HasKey("DependencyBoardId");

                    b.ToTable("DependencyBoards");
                });

            modelBuilder.Entity("BigRoomPlanningBoardBackend.Events.Event", b =>
                {
                    b.Property<int>("EventId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("TEXT");

                    b.Property<string>("Discriminator")
                        .IsRequired()
                        .HasMaxLength(34)
                        .HasColumnType("TEXT");

                    b.Property<bool>("IsProcessed")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("IsSuccessful")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("ProcessedAt")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("RecievedAt")
                        .HasColumnType("TEXT");

                    b.Property<string>("SessionId")
                        .HasColumnType("TEXT");

                    b.HasKey("EventId");

                    b.ToTable("Events");

                    b.HasDiscriminator().HasValue("Event");

                    b.UseTphMappingStrategy();
                });

            modelBuilder.Entity("BigRoomPlanningBoardBackend.PlannedPeriod", b =>
                {
                    b.Property<int>("PlannedPeriodId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<DateTime?>("BigRoomPlanningAt")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("EndDay")
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("StartDay")
                        .HasColumnType("TEXT");

                    b.HasKey("PlannedPeriodId");

                    b.ToTable("PlannedPeriods");
                });

            modelBuilder.Entity("BigRoomPlanningBoardBackend.Risk", b =>
                {
                    b.Property<int>("RiskId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<bool>("Accepted")
                        .HasColumnType("INTEGER");

                    b.Property<int>("SprintId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("SquadId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Text")
                        .HasColumnType("TEXT");

                    b.HasKey("RiskId");

                    b.ToTable("Risks");
                });

            modelBuilder.Entity("BigRoomPlanningBoardBackend.Session", b =>
                {
                    b.Property<string>("SessionId")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("TEXT");

                    b.Property<string>("Username")
                        .HasColumnType("TEXT");

                    b.HasKey("SessionId");

                    b.ToTable("Sessions");
                });

            modelBuilder.Entity("BigRoomPlanningBoardBackend.Sprint", b =>
                {
                    b.Property<int>("SprintId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("EndsAt")
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("StartsAt")
                        .HasColumnType("TEXT");

                    b.HasKey("SprintId");

                    b.ToTable("Sprints");
                });

            modelBuilder.Entity("BigRoomPlanningBoardBackend.Squad", b =>
                {
                    b.Property<int>("SquadId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Name")
                        .HasColumnType("TEXT");

                    b.HasKey("SquadId");

                    b.ToTable("Squads");
                });

            modelBuilder.Entity("BigRoomPlanningBoardBackend.SquadSprintStats", b =>
                {
                    b.Property<int>("SquadId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("SprintId")
                        .HasColumnType("INTEGER");

                    b.Property<double>("BackgroundNoise")
                        .HasColumnType("REAL");

                    b.Property<double>("Capacity")
                        .HasColumnType("REAL");

                    b.Property<string>("Note")
                        .HasColumnType("TEXT");

                    b.HasKey("SquadId", "SprintId");

                    b.ToTable("SquadSprintStats");
                });

            modelBuilder.Entity("BigRoomPlanningBoardBackend.Ticket", b =>
                {
                    b.Property<int>("TicketId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("ColumnOrder")
                        .HasColumnType("INTEGER");

                    b.Property<int>("PlannedPeriodId")
                        .HasColumnType("INTEGER");

                    b.Property<int?>("PredecessorId")
                        .HasColumnType("INTEGER");

                    b.Property<int?>("SprintId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("SquadId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Title")
                        .HasColumnType("TEXT");

                    b.HasKey("TicketId");

                    b.ToTable("Tickets");
                });

            modelBuilder.Entity("BigRoomPlanningBoardBackend.Events.Types.AddDependencyEvent", b =>
                {
                    b.HasBaseType("BigRoomPlanningBoardBackend.Events.Event");

                    b.Property<int>("DependantTicketId")
                        .HasColumnType("INTEGER");

                    b.Property<int?>("DependencyId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("DependencyTicketId")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("InSameSprint")
                        .HasColumnType("INTEGER");

                    b.HasDiscriminator().HasValue("AddDependencyEvent");
                });

            modelBuilder.Entity("BigRoomPlanningBoardBackend.Events.Types.AddOrUpdateSquadSprintStatsEvent", b =>
                {
                    b.HasBaseType("BigRoomPlanningBoardBackend.Events.Event");

                    b.Property<double>("BackgroundNoise")
                        .HasColumnType("REAL");

                    b.Property<double>("Capacity")
                        .HasColumnType("REAL");

                    b.Property<string>("Note")
                        .HasColumnType("TEXT");

                    b.Property<int>("SprintId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("SquadId")
                        .HasColumnType("INTEGER");

                    b.HasDiscriminator().HasValue("AddOrUpdateSquadSprintStatsEvent");
                });

            modelBuilder.Entity("BigRoomPlanningBoardBackend.Events.Types.AddPlannedPeriodEvent", b =>
                {
                    b.HasBaseType("BigRoomPlanningBoardBackend.Events.Event");

                    b.Property<DateTime?>("BigRoomPlanningAt")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("EndDay")
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .HasColumnType("TEXT");

                    b.Property<int?>("PlannedPeriodId")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("StartDay")
                        .HasColumnType("TEXT");

                    b.HasDiscriminator().HasValue("AddPlannedPeriodEvent");
                });

            modelBuilder.Entity("BigRoomPlanningBoardBackend.Events.Types.AddRiskEvent", b =>
                {
                    b.HasBaseType("BigRoomPlanningBoardBackend.Events.Event");

                    b.Property<bool>("Accepted")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Mitigations")
                        .HasColumnType("TEXT");

                    b.Property<int?>("RiskId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("SprintId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("SquadId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Text")
                        .HasColumnType("TEXT");

                    b.ToTable("Events", t =>
                        {
                            t.Property("SprintId")
                                .HasColumnName("AddRiskEvent_SprintId");

                            t.Property("SquadId")
                                .HasColumnName("AddRiskEvent_SquadId");
                        });

                    b.HasDiscriminator().HasValue("AddRiskEvent");
                });

            modelBuilder.Entity("BigRoomPlanningBoardBackend.Events.Types.AddSessionEvent", b =>
                {
                    b.HasBaseType("BigRoomPlanningBoardBackend.Events.Event");

                    b.Property<string>("SessionName")
                        .HasColumnType("TEXT");

                    b.HasDiscriminator().HasValue("AddSessionEvent");
                });

            modelBuilder.Entity("BigRoomPlanningBoardBackend.Events.Types.AddSprintEvent", b =>
                {
                    b.HasBaseType("BigRoomPlanningBoardBackend.Events.Event");

                    b.Property<DateTime>("EndsAt")
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .HasColumnType("TEXT");

                    b.Property<int?>("SprintId")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("StartsAt")
                        .HasColumnType("TEXT");

                    b.ToTable("Events", t =>
                        {
                            t.Property("Name")
                                .HasColumnName("AddSprintEvent_Name");

                            t.Property("SprintId")
                                .HasColumnName("AddSprintEvent_SprintId");
                        });

                    b.HasDiscriminator().HasValue("AddSprintEvent");
                });

            modelBuilder.Entity("BigRoomPlanningBoardBackend.Events.Types.AddSquadEvent", b =>
                {
                    b.HasBaseType("BigRoomPlanningBoardBackend.Events.Event");

                    b.Property<string>("Name")
                        .HasColumnType("TEXT");

                    b.Property<int?>("SquadId")
                        .HasColumnType("INTEGER");

                    b.ToTable("Events", t =>
                        {
                            t.Property("Name")
                                .HasColumnName("AddSquadEvent_Name");

                            t.Property("SquadId")
                                .HasColumnName("AddSquadEvent_SquadId");
                        });

                    b.HasDiscriminator().HasValue("AddSquadEvent");
                });

            modelBuilder.Entity("BigRoomPlanningBoardBackend.Events.Types.AddTicketEvent", b =>
                {
                    b.HasBaseType("BigRoomPlanningBoardBackend.Events.Event");

                    b.Property<int>("ColumnOrder")
                        .HasColumnType("INTEGER");

                    b.Property<int>("PlannedPeriodId")
                        .HasColumnType("INTEGER");

                    b.Property<int?>("PredecessorId")
                        .HasColumnType("INTEGER");

                    b.Property<int?>("SprintId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("SquadId")
                        .HasColumnType("INTEGER");

                    b.Property<int?>("TicketId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Title")
                        .HasColumnType("TEXT");

                    b.ToTable("Events", t =>
                        {
                            t.Property("PlannedPeriodId")
                                .HasColumnName("AddTicketEvent_PlannedPeriodId");

                            t.Property("SprintId")
                                .HasColumnName("AddTicketEvent_SprintId");

                            t.Property("SquadId")
                                .HasColumnName("AddTicketEvent_SquadId");
                        });

                    b.HasDiscriminator().HasValue("AddTicketEvent");
                });

            modelBuilder.Entity("BigRoomPlanningBoardBackend.Events.Types.DeleteDependencyEvent", b =>
                {
                    b.HasBaseType("BigRoomPlanningBoardBackend.Events.Event");

                    b.Property<int>("DependencyId")
                        .HasColumnType("INTEGER");

                    b.ToTable("Events", t =>
                        {
                            t.Property("DependencyId")
                                .HasColumnName("DeleteDependencyEvent_DependencyId");
                        });

                    b.HasDiscriminator().HasValue("DeleteDependencyEvent");
                });

            modelBuilder.Entity("BigRoomPlanningBoardBackend.Events.Types.DeleteRiskEvent", b =>
                {
                    b.HasBaseType("BigRoomPlanningBoardBackend.Events.Event");

                    b.Property<int>("RiskId")
                        .HasColumnType("INTEGER");

                    b.ToTable("Events", t =>
                        {
                            t.Property("RiskId")
                                .HasColumnName("DeleteRiskEvent_RiskId");
                        });

                    b.HasDiscriminator().HasValue("DeleteRiskEvent");
                });

            modelBuilder.Entity("BigRoomPlanningBoardBackend.Events.Types.DeleteSessionEvent", b =>
                {
                    b.HasBaseType("BigRoomPlanningBoardBackend.Events.Event");

                    b.Property<string>("DeleteSessionId")
                        .HasColumnType("TEXT");

                    b.HasDiscriminator().HasValue("DeleteSessionEvent");
                });

            modelBuilder.Entity("BigRoomPlanningBoardBackend.Events.Types.DeleteTicketEvent", b =>
                {
                    b.HasBaseType("BigRoomPlanningBoardBackend.Events.Event");

                    b.Property<int>("TicketId")
                        .HasColumnType("INTEGER");

                    b.ToTable("Events", t =>
                        {
                            t.Property("TicketId")
                                .HasColumnName("DeleteTicketEvent_TicketId");
                        });

                    b.HasDiscriminator().HasValue("DeleteTicketEvent");
                });

            modelBuilder.Entity("BigRoomPlanningBoardBackend.Events.Types.EditDependencyEvent", b =>
                {
                    b.HasBaseType("BigRoomPlanningBoardBackend.Events.Event");

                    b.Property<int>("DependencyId")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("InSameSprint")
                        .HasColumnType("INTEGER");

                    b.ToTable("Events", t =>
                        {
                            t.Property("DependencyId")
                                .HasColumnName("EditDependencyEvent_DependencyId");

                            t.Property("InSameSprint")
                                .HasColumnName("EditDependencyEvent_InSameSprint");
                        });

                    b.HasDiscriminator().HasValue("EditDependencyEvent");
                });

            modelBuilder.Entity("BigRoomPlanningBoardBackend.Events.Types.EditPlannedPeriodEvent", b =>
                {
                    b.HasBaseType("BigRoomPlanningBoardBackend.Events.Event");

                    b.Property<DateTime?>("BigRoomPlanningAt")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("EndDay")
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .HasColumnType("TEXT");

                    b.Property<int>("PlannedPeriodId")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("StartDay")
                        .HasColumnType("TEXT");

                    b.ToTable("Events", t =>
                        {
                            t.Property("BigRoomPlanningAt")
                                .HasColumnName("EditPlannedPeriodEvent_BigRoomPlanningAt");

                            t.Property("EndDay")
                                .HasColumnName("EditPlannedPeriodEvent_EndDay");

                            t.Property("Name")
                                .HasColumnName("EditPlannedPeriodEvent_Name");

                            t.Property("PlannedPeriodId")
                                .HasColumnName("EditPlannedPeriodEvent_PlannedPeriodId");

                            t.Property("StartDay")
                                .HasColumnName("EditPlannedPeriodEvent_StartDay");
                        });

                    b.HasDiscriminator().HasValue("EditPlannedPeriodEvent");
                });

            modelBuilder.Entity("BigRoomPlanningBoardBackend.Events.Types.EditRiskEvent", b =>
                {
                    b.HasBaseType("BigRoomPlanningBoardBackend.Events.Event");

                    b.Property<bool>("Accepted")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Mitigations")
                        .HasColumnType("TEXT");

                    b.Property<int>("RiskId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("SprintId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("SquadId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Text")
                        .HasColumnType("TEXT");

                    b.ToTable("Events", t =>
                        {
                            t.Property("Accepted")
                                .HasColumnName("EditRiskEvent_Accepted");

                            t.Property("Mitigations")
                                .HasColumnName("EditRiskEvent_Mitigations");

                            t.Property("RiskId")
                                .HasColumnName("EditRiskEvent_RiskId");

                            t.Property("SprintId")
                                .HasColumnName("EditRiskEvent_SprintId");

                            t.Property("SquadId")
                                .HasColumnName("EditRiskEvent_SquadId");

                            t.Property("Text")
                                .HasColumnName("EditRiskEvent_Text");
                        });

                    b.HasDiscriminator().HasValue("EditRiskEvent");
                });

            modelBuilder.Entity("BigRoomPlanningBoardBackend.Events.Types.EditSprintEvent", b =>
                {
                    b.HasBaseType("BigRoomPlanningBoardBackend.Events.Event");

                    b.Property<DateTime>("EndsAt")
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .HasColumnType("TEXT");

                    b.Property<int>("SprintId")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("StartsAt")
                        .HasColumnType("TEXT");

                    b.ToTable("Events", t =>
                        {
                            t.Property("EndsAt")
                                .HasColumnName("EditSprintEvent_EndsAt");

                            t.Property("Name")
                                .HasColumnName("EditSprintEvent_Name");

                            t.Property("SprintId")
                                .HasColumnName("EditSprintEvent_SprintId");

                            t.Property("StartsAt")
                                .HasColumnName("EditSprintEvent_StartsAt");
                        });

                    b.HasDiscriminator().HasValue("EditSprintEvent");
                });

            modelBuilder.Entity("BigRoomPlanningBoardBackend.Events.Types.EditSquadEvent", b =>
                {
                    b.HasBaseType("BigRoomPlanningBoardBackend.Events.Event");

                    b.Property<string>("Name")
                        .HasColumnType("TEXT");

                    b.Property<int>("SquadId")
                        .HasColumnType("INTEGER");

                    b.ToTable("Events", t =>
                        {
                            t.Property("Name")
                                .HasColumnName("EditSquadEvent_Name");

                            t.Property("SquadId")
                                .HasColumnName("EditSquadEvent_SquadId");
                        });

                    b.HasDiscriminator().HasValue("EditSquadEvent");
                });

            modelBuilder.Entity("BigRoomPlanningBoardBackend.Events.Types.EditTicketEvent", b =>
                {
                    b.HasBaseType("BigRoomPlanningBoardBackend.Events.Event");

                    b.Property<int>("ColumnOrder")
                        .HasColumnType("INTEGER");

                    b.Property<int>("PlannedPeriodId")
                        .HasColumnType("INTEGER");

                    b.Property<int?>("PredecessorId")
                        .HasColumnType("INTEGER");

                    b.Property<int?>("SprintId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("SquadId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("TicketId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Title")
                        .HasColumnType("TEXT");

                    b.ToTable("Events", t =>
                        {
                            t.Property("ColumnOrder")
                                .HasColumnName("EditTicketEvent_ColumnOrder");

                            t.Property("PlannedPeriodId")
                                .HasColumnName("EditTicketEvent_PlannedPeriodId");

                            t.Property("PredecessorId")
                                .HasColumnName("EditTicketEvent_PredecessorId");

                            t.Property("SprintId")
                                .HasColumnName("EditTicketEvent_SprintId");

                            t.Property("SquadId")
                                .HasColumnName("EditTicketEvent_SquadId");

                            t.Property("TicketId")
                                .HasColumnName("EditTicketEvent_TicketId");

                            t.Property("Title")
                                .HasColumnName("EditTicketEvent_Title");
                        });

                    b.HasDiscriminator().HasValue("EditTicketEvent");
                });
#pragma warning restore 612, 618
        }
    }
}
